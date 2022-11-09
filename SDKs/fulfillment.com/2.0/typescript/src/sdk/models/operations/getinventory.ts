import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInventoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=externalSkuNames" })
  externalSkuNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=merchantIds" })
  merchantIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetInventorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class GetInventoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInventoryQueryParams;

  @Metadata()
  security: GetInventorySecurity;
}


// GetInventoryItemInventoryArrayV2ItemInventoryV2Item
/** 
 * Item this inventory data is based on
**/
export class GetInventoryItemInventoryArrayV2ItemInventoryV2Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=skuReference" })
  skuReference?: string;
}


// GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant
/** 
 * Merchant that owns this item
**/
export class GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableToPromise" })
  availableToPromise?: number;
}


export class GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total?: GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal;
}


export class GetInventoryItemInventoryArrayV2ItemInventoryV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: GetInventoryItemInventoryArrayV2ItemInventoryV2Item;

  @Metadata({ data: "json, name=merchant" })
  merchant?: GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant;

  @Metadata({ data: "json, name=quantity" })
  quantity?: GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity;
}


export class GetInventoryItemInventoryArrayV2MetaPaginationV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=totalPages" })
  totalPages?: number;
}


export class GetInventoryItemInventoryArrayV2Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: GetInventoryItemInventoryArrayV2MetaPaginationV2;
}


export class GetInventoryItemInventoryArrayV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetInventoryItemInventoryArrayV2ItemInventoryV2 })
  data?: GetInventoryItemInventoryArrayV2ItemInventoryV2[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetInventoryItemInventoryArrayV2Meta;
}


export class GetInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemInventoryArrayV2?: GetInventoryItemInventoryArrayV2;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
