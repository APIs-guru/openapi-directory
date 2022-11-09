import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorProto } from "./errorproto";
import { ErrorProto } from "./errorproto";


export class JobStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorResult" })
  errorResult?: ErrorProto;

  @Metadata({ data: "json, name=errors", elemType: shared.ErrorProto })
  errors?: ErrorProto[];

  @Metadata({ data: "json, name=state" })
  state?: string;
}
