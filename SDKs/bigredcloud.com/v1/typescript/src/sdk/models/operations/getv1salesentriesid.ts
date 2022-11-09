import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1SalesEntriesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesEntriesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1SalesEntriesIdPathParams;
}


export class GetV1SalesEntriesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesEntryDto?: shared.SalesEntryDto;

  @Metadata()
  statusCode: number;
}
