import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExpansionFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @Metadata({ data: "json, name=referencesVersion" })
  referencesVersion?: number;
}
