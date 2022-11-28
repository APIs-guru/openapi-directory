import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Namespace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;
}
