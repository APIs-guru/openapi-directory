import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ErrorStatusEnum {
    Error = "error"
}


export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ErrorStatusEnum;
}
