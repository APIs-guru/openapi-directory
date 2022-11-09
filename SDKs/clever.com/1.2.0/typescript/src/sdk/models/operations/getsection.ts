import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSectionPathParams;
}


export class GetSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  sectionResponse?: shared.SectionResponse;

  @Metadata()
  statusCode: number;
}
