import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ErrorStatusEnum {
    Error = "error"
}


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error: string;

  @Metadata({ data: "json, name=status" })
  status: ErrorStatusEnum;
}
