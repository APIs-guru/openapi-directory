import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { Compliance } from "./compliance";
import { FindingProviderFields } from "./findingproviderfields";
import { Malware } from "./malware";
import { Network } from "./network";
import { NetworkPathComponent } from "./networkpathcomponent";
import { Note } from "./note";
import { PatchSummary } from "./patchsummary";
import { ProcessDetails } from "./processdetails";
import { RecordStateEnum } from "./recordstateenum";
import { RelatedFinding } from "./relatedfinding";
import { Remediation } from "./remediation";
import { Resource } from "./resource";
import { Severity } from "./severity";
import { ThreatIntelIndicator } from "./threatintelindicator";
import { VerificationStateEnum } from "./verificationstateenum";
import { Vulnerability } from "./vulnerability";
import { Workflow } from "./workflow";
import { WorkflowStateEnum } from "./workflowstateenum";


// AwsSecurityFinding
/** 
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note>
**/
export class AwsSecurityFinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: Action;

  @Metadata({ data: "json, name=AwsAccountId" })
  awsAccountId: string;

  @Metadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @Metadata({ data: "json, name=Compliance" })
  compliance?: Compliance;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt: string;

  @Metadata({ data: "json, name=Criticality" })
  criticality?: number;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=FindingProviderFields" })
  findingProviderFields?: FindingProviderFields;

  @Metadata({ data: "json, name=FirstObservedAt" })
  firstObservedAt?: string;

  @Metadata({ data: "json, name=GeneratorId" })
  generatorId: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=LastObservedAt" })
  lastObservedAt?: string;

  @Metadata({ data: "json, name=Malware", elemType: shared.Malware })
  malware?: Malware[];

  @Metadata({ data: "json, name=Network" })
  network?: Network;

  @Metadata({ data: "json, name=NetworkPath", elemType: shared.NetworkPathComponent })
  networkPath?: NetworkPathComponent[];

  @Metadata({ data: "json, name=Note" })
  note?: Note;

  @Metadata({ data: "json, name=PatchSummary" })
  patchSummary?: PatchSummary;

  @Metadata({ data: "json, name=Process" })
  process?: ProcessDetails;

  @Metadata({ data: "json, name=ProductArn" })
  productArn: string;

  @Metadata({ data: "json, name=ProductFields" })
  productFields?: Map<string, string>;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=RecordState" })
  recordState?: RecordStateEnum;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=RelatedFindings", elemType: shared.RelatedFinding })
  relatedFindings?: RelatedFinding[];

  @Metadata({ data: "json, name=Remediation" })
  remediation?: Remediation;

  @Metadata({ data: "json, name=Resources", elemType: shared.Resource })
  resources: Resource[];

  @Metadata({ data: "json, name=SchemaVersion" })
  schemaVersion: string;

  @Metadata({ data: "json, name=Severity" })
  severity?: Severity;

  @Metadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=ThreatIntelIndicators", elemType: shared.ThreatIntelIndicator })
  threatIntelIndicators?: ThreatIntelIndicator[];

  @Metadata({ data: "json, name=Title" })
  title: string;

  @Metadata({ data: "json, name=Types" })
  types?: string[];

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt: string;

  @Metadata({ data: "json, name=UserDefinedFields" })
  userDefinedFields?: Map<string, string>;

  @Metadata({ data: "json, name=VerificationState" })
  verificationState?: VerificationStateEnum;

  @Metadata({ data: "json, name=Vulnerabilities", elemType: shared.Vulnerability })
  vulnerabilities?: Vulnerability[];

  @Metadata({ data: "json, name=Workflow" })
  workflow?: Workflow;

  @Metadata({ data: "json, name=WorkflowState" })
  workflowState?: WorkflowStateEnum;
}
