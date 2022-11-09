import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuthenticationErrorStatusEnum {
    Error = "error"
}


export class AuthenticationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error: string;

  @Metadata({ data: "json, name=status" })
  status?: AuthenticationErrorStatusEnum;
}
