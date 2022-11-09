import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Checksum } from "./checksum";


export class CreateAppPkg extends SpeakeasyBase {
  @Metadata({ data: "json, name=appPkgName" })
  appPkgName: string;

  @Metadata({ data: "json, name=appPkgPath" })
  appPkgPath: string;

  @Metadata({ data: "json, name=appPkgVersion" })
  appPkgVersion: string;

  @Metadata({ data: "json, name=appProvider" })
  appProvider?: string;

  @Metadata({ data: "json, name=checksum" })
  checksum: Checksum;

  @Metadata({ data: "json, name=userDefinedData" })
  userDefinedData?: Map<string, any>;
}
