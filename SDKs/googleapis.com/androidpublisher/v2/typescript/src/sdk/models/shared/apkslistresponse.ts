import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Apk } from "./apk";



export class ApksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Apk })
  apks?: Apk[];

  @SpeakeasyMetadata()
  kind?: string;
}
