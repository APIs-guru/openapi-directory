import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";



export class JobStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorResult" })
  errorResult?: ErrorProto;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorProto })
  errors?: ErrorProto[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
