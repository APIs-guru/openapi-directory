import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Alert extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isDismissible" })
  isDismissible?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
