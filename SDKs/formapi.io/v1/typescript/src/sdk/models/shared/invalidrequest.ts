import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InvalidRequestStatusEnum {
    Error = "error"
}


export class InvalidRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: string[];

  @Metadata({ data: "json, name=status" })
  status: InvalidRequestStatusEnum;
}
