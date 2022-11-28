import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyProductOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CopyProductToken" })
  copyProductToken?: string;
}
