import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstallationMedia } from "./installationmedia";



export class InstallationMediaMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstallationMedia })
  installationMedia?: InstallationMedia[];

  @SpeakeasyMetadata()
  marker?: string;
}
