import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchoolForSectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolForSectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchoolForSectionPathParams;
}


export class GetSchoolForSectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  schoolResponse?: shared.SchoolResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
