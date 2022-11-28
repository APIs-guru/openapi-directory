import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchoolPathParams;
}


export class GetSchoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  schoolResponse?: shared.SchoolResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
