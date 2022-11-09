import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Enterprise } from "./enterprise";


export class EnterprisesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=enterprise", elemType: shared.Enterprise })
  enterprise?: Enterprise[];
}
