import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { PresidentialByCandidate } from "./presidentialbycandidate";


export class PresidentialByCandidatePage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.PresidentialByCandidate })
  results?: PresidentialByCandidate[];
}
