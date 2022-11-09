import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodesOfConductGetAllCodesOfConduct415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class CodesOfConductGetAllCodesOfConductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.CodeOfConduct })
  codeOfConducts?: shared.CodeOfConduct[];

  @Metadata()
  codesOfConductGetAllCodesOfConduct415ApplicationJsonObject?: CodesOfConductGetAllCodesOfConduct415ApplicationJson;
}
