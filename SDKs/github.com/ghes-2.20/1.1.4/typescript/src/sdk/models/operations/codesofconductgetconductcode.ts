import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodesOfConductGetConductCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class CodesOfConductGetConductCode415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class CodesOfConductGetConductCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodesOfConductGetConductCodePathParams;
}


export class CodesOfConductGetConductCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  codeOfConduct?: shared.CodeOfConduct;

  @SpeakeasyMetadata()
  codesOfConductGetConductCode415ApplicationJsonObject?: CodesOfConductGetConductCode415ApplicationJson;
}
