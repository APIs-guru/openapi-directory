import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitignoreGetTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GitignoreGetTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitignoreGetTemplatePathParams;
}


export class GitignoreGetTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gitignoreTemplate?: shared.GitignoreTemplate;
}
