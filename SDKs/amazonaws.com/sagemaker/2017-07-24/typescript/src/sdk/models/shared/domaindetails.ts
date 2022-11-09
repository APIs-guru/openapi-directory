import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainStatusEnum } from "./domainstatusenum";


// DomainDetails
/** 
 * The domain's details.
**/
export class DomainDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DomainArn" })
  domainArn?: string;

  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: DomainStatusEnum;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
