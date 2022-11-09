import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RunConfiguration } from "./runconfiguration";


export class StartApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=RunConfiguration" })
  runConfiguration?: RunConfiguration;
}
