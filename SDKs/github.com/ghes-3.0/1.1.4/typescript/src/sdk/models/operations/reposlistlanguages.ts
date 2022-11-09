import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposListLanguagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListLanguagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListLanguagesPathParams;
}


export class ReposListLanguagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  language?: Map<string, number>;
}
