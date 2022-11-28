import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Checksum } from "./checksum";



export class CreateAppPkg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appPkgName" })
  appPkgName: string;

  @SpeakeasyMetadata({ data: "json, name=appPkgPath" })
  appPkgPath: string;

  @SpeakeasyMetadata({ data: "json, name=appPkgVersion" })
  appPkgVersion: string;

  @SpeakeasyMetadata({ data: "json, name=appProvider" })
  appProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum: Checksum;

  @SpeakeasyMetadata({ data: "json, name=userDefinedData" })
  userDefinedData?: Map<string, any>;
}
