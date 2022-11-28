import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposListLanguagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListLanguagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListLanguagesPathParams;
}


export class ReposListLanguagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  language?: Map<string, number>;
}
