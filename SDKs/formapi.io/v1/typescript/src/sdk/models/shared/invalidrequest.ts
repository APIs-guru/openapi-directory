import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvalidRequestStatusEnum {
    Error = "error"
}


export class InvalidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: InvalidRequestStatusEnum;
}
