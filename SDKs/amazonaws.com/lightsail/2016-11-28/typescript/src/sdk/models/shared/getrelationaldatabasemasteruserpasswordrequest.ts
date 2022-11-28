import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabasePasswordVersionEnum } from "./relationaldatabasepasswordversionenum";



export class GetRelationalDatabaseMasterUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passwordVersion" })
  passwordVersion?: RelationalDatabasePasswordVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;
}
