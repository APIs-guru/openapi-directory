import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
