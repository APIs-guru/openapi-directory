import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Namespace extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespace" })
  namespace?: string;
}
