import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RunConfiguration } from "./runconfiguration";



export class StartApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=RunConfiguration" })
  runConfiguration?: RunConfiguration;
}
