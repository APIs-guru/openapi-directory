import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSectionPathParams;
}


export class GetSectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  sectionResponse?: shared.SectionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
