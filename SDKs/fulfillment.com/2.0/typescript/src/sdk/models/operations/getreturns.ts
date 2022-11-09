import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReturnsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate: string;
}


export class GetReturnsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class GetReturnsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReturnsQueryParams;

  @Metadata()
  security: GetReturnsSecurity;
}


export class GetReturnsReturnsArrayV2ReturnV2Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: number;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;
}


export class GetReturnsReturnsArrayV2ReturnV2Reason extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}


export class GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetReturnsReturnsArrayV2ReturnV2RmaItemV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=item" })
  item?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item;

  @Metadata({ data: "json, name=nonRestockedReason" })
  nonRestockedReason?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason;

  @Metadata({ data: "json, name=quantityExpected" })
  quantityExpected?: number;

  @Metadata({ data: "json, name=quantityRestocked" })
  quantityRestocked?: number;

  @Metadata({ data: "json, name=quantityReturned" })
  quantityReturned?: number;

  @Metadata({ data: "json, name=quantityShipped" })
  quantityShipped?: number;
}


export class GetReturnsReturnsArrayV2ReturnV2Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class GetReturnsReturnsArrayV2ReturnV2UserV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}


export class GetReturnsReturnsArrayV2ReturnV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=order" })
  order?: GetReturnsReturnsArrayV2ReturnV2Order;

  @Metadata({ data: "json, name=reason" })
  reason: GetReturnsReturnsArrayV2ReturnV2Reason;

  @Metadata({ data: "json, name=returnedBy" })
  returnedBy?: string;

  @Metadata({ data: "json, name=rmaItems", elemType: operations.GetReturnsReturnsArrayV2ReturnV2RmaItemV2 })
  rmaItems?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2[];

  @Metadata({ data: "json, name=rmaNumber" })
  rmaNumber?: string;

  @Metadata({ data: "json, name=status" })
  status: GetReturnsReturnsArrayV2ReturnV2Status;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy: GetReturnsReturnsArrayV2ReturnV2UserV2;
}


export class GetReturnsReturnsArrayV2MetaPaginationV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=totalPages" })
  totalPages?: number;
}


export class GetReturnsReturnsArrayV2Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: GetReturnsReturnsArrayV2MetaPaginationV2;
}


export class GetReturnsReturnsArrayV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetReturnsReturnsArrayV2ReturnV2 })
  data?: GetReturnsReturnsArrayV2ReturnV2[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetReturnsReturnsArrayV2Meta;
}


export class GetReturnsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  returnsArrayV2?: GetReturnsReturnsArrayV2;

  @Metadata()
  statusCode: number;
}
