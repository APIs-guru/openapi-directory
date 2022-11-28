import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReturnsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate: string;
}


export class GetReturnsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class GetReturnsReturnsArrayV2ReturnV2Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;
}


export class GetReturnsReturnsArrayV2ReturnV2Reason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetReturnsReturnsArrayV2ReturnV2RmaItemV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item;

  @SpeakeasyMetadata({ data: "json, name=nonRestockedReason" })
  nonRestockedReason?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason;

  @SpeakeasyMetadata({ data: "json, name=quantityExpected" })
  quantityExpected?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityRestocked" })
  quantityRestocked?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityReturned" })
  quantityReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityShipped" })
  quantityShipped?: number;
}


export class GetReturnsReturnsArrayV2ReturnV2Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class GetReturnsReturnsArrayV2ReturnV2UserV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}


export class GetReturnsReturnsArrayV2ReturnV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: GetReturnsReturnsArrayV2ReturnV2Order;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: GetReturnsReturnsArrayV2ReturnV2Reason;

  @SpeakeasyMetadata({ data: "json, name=returnedBy" })
  returnedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=rmaItems", elemType: GetReturnsReturnsArrayV2ReturnV2RmaItemV2 })
  rmaItems?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2[];

  @SpeakeasyMetadata({ data: "json, name=rmaNumber" })
  rmaNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetReturnsReturnsArrayV2ReturnV2Status;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy: GetReturnsReturnsArrayV2ReturnV2UserV2;
}


export class GetReturnsReturnsArrayV2MetaPaginationV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPages" })
  totalPages?: number;
}


export class GetReturnsReturnsArrayV2Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: GetReturnsReturnsArrayV2MetaPaginationV2;
}


export class GetReturnsReturnsArrayV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetReturnsReturnsArrayV2ReturnV2 })
  data?: GetReturnsReturnsArrayV2ReturnV2[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetReturnsReturnsArrayV2Meta;
}


export class GetReturnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReturnsQueryParams;

  @SpeakeasyMetadata()
  security: GetReturnsSecurity;
}


export class GetReturnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  returnsArrayV2?: GetReturnsReturnsArrayV2;

  @SpeakeasyMetadata()
  statusCode: number;
}
