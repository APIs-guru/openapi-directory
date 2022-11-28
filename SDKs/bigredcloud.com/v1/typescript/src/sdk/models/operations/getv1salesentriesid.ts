import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1SalesEntriesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesEntriesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1SalesEntriesIdPathParams;
}


export class GetV1SalesEntriesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesEntryDto?: shared.SalesEntryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
