import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinuxHosting extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;
}
