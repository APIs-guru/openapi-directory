import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitignoreGetTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GitignoreGetTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitignoreGetTemplatePathParams;
}


export class GitignoreGetTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gitignoreTemplate?: shared.GitignoreTemplate;
}
