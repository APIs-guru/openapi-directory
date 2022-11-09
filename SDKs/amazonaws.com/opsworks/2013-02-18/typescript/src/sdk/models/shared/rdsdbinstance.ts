import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RdsDbInstance
/** 
 * Describes an Amazon RDS instance.
**/
export class RdsDbInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @Metadata({ data: "json, name=DbPassword" })
  dbPassword?: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @Metadata({ data: "json, name=Engine" })
  engine?: string;

  @Metadata({ data: "json, name=MissingOnRds" })
  missingOnRds?: boolean;

  @Metadata({ data: "json, name=RdsDbInstanceArn" })
  rdsDbInstanceArn?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
