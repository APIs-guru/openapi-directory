import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodesOfConductGetConductCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class CodesOfConductGetConductCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodesOfConductGetConductCodePathParams;
}


export class CodesOfConductGetConductCode415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class CodesOfConductGetConductCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  codeOfConduct?: shared.CodeOfConduct;

  @Metadata()
  codesOfConductGetConductCode415ApplicationJsonObject?: CodesOfConductGetConductCode415ApplicationJson;
}
