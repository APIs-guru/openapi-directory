import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthenticationErrorStatusEnum {
    Error = "error"
}


export class AuthenticationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AuthenticationErrorStatusEnum;
}
