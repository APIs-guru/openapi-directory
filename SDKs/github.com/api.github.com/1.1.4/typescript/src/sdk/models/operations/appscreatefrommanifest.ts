import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsCreateFromManifestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;
}


export class AppsCreateFromManifestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsCreateFromManifestPathParams;
}


export class AppsCreateFromManifestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  gitHubApp?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
