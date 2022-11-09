import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversionsGetDatapointsCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}


export class ConversionsGetDatapointsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ConversionsGetDatapointsCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversionsGetDatapointsCountPathParams;

  @Metadata()
  queryParams: ConversionsGetDatapointsCountQueryParams;
}


export class ConversionsGetDatapointsCountResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
