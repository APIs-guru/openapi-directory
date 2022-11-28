import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInventoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=externalSkuNames" })
  externalSkuNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=merchantIds" })
  merchantIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetInventorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


// GetInventoryItemInventoryArrayV2ItemInventoryV2Item
/** 
 * Item this inventory data is based on
**/
export class GetInventoryItemInventoryArrayV2ItemInventoryV2Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=skuReference" })
  skuReference?: string;
}


// GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant
/** 
 * Merchant that owns this item
**/
export class GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableToPromise" })
  availableToPromise?: number;
}


export class GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal;
}


export class GetInventoryItemInventoryArrayV2ItemInventoryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: GetInventoryItemInventoryArrayV2ItemInventoryV2Item;

  @SpeakeasyMetadata({ data: "json, name=merchant" })
  merchant?: GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity;
}


export class GetInventoryItemInventoryArrayV2MetaPaginationV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPages" })
  totalPages?: number;
}


export class GetInventoryItemInventoryArrayV2Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: GetInventoryItemInventoryArrayV2MetaPaginationV2;
}


export class GetInventoryItemInventoryArrayV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetInventoryItemInventoryArrayV2ItemInventoryV2 })
  data?: GetInventoryItemInventoryArrayV2ItemInventoryV2[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetInventoryItemInventoryArrayV2Meta;
}


export class GetInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInventoryQueryParams;

  @SpeakeasyMetadata()
  security: GetInventorySecurity;
}


export class GetInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemInventoryArrayV2?: GetInventoryItemInventoryArrayV2;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
