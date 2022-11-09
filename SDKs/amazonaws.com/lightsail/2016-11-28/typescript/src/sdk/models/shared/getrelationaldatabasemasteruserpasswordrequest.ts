import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationalDatabasePasswordVersionEnum } from "./relationaldatabasepasswordversionenum";


export class GetRelationalDatabaseMasterUserPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=passwordVersion" })
  passwordVersion?: RelationalDatabasePasswordVersionEnum;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
