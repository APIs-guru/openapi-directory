import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodesOfConductGetAllCodesOfConduct415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class CodesOfConductGetAllCodesOfConductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.CodeOfConduct })
  codeOfConducts?: shared.CodeOfConduct[];

  @SpeakeasyMetadata()
  codesOfConductGetAllCodesOfConduct415ApplicationJsonObject?: CodesOfConductGetAllCodesOfConduct415ApplicationJson;
}
