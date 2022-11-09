import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BiEngineStatistics } from "./bienginestatistics";
import { TableReference } from "./tablereference";
import { DatasetReference } from "./datasetreference";
import { RoutineReference } from "./routinereference";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";
import { TableReference } from "./tablereference";
import { DmlStatistics } from "./dmlstatistics";
import { MlStatistics } from "./mlstatistics";
import { BigQueryModelTraining } from "./bigquerymodeltraining";
import { ExplainQueryStage } from "./explainquerystage";
import { RoutineReference } from "./routinereference";
import { TableReference } from "./tablereference";
import { TableSchema } from "./tableschema";
import { SearchStatistics } from "./searchstatistics";
import { SparkStatistics } from "./sparkstatistics";
import { QueryTimelineSample } from "./querytimelinesample";
import { QueryParameter } from "./queryparameter";


export class JobStatistics2ReservationUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slotMs" })
  slotMs?: string;
}


export class JobStatistics2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=biEngineStatistics" })
  biEngineStatistics?: BiEngineStatistics;

  @Metadata({ data: "json, name=billingTier" })
  billingTier?: number;

  @Metadata({ data: "json, name=cacheHit" })
  cacheHit?: boolean;

  @Metadata({ data: "json, name=ddlAffectedRowAccessPolicyCount" })
  ddlAffectedRowAccessPolicyCount?: string;

  @Metadata({ data: "json, name=ddlDestinationTable" })
  ddlDestinationTable?: TableReference;

  @Metadata({ data: "json, name=ddlOperationPerformed" })
  ddlOperationPerformed?: string;

  @Metadata({ data: "json, name=ddlTargetDataset" })
  ddlTargetDataset?: DatasetReference;

  @Metadata({ data: "json, name=ddlTargetRoutine" })
  ddlTargetRoutine?: RoutineReference;

  @Metadata({ data: "json, name=ddlTargetRowAccessPolicy" })
  ddlTargetRowAccessPolicy?: RowAccessPolicyReference;

  @Metadata({ data: "json, name=ddlTargetTable" })
  ddlTargetTable?: TableReference;

  @Metadata({ data: "json, name=dmlStats" })
  dmlStats?: DmlStatistics;

  @Metadata({ data: "json, name=estimatedBytesProcessed" })
  estimatedBytesProcessed?: string;

  @Metadata({ data: "json, name=mlStatistics" })
  mlStatistics?: MlStatistics;

  @Metadata({ data: "json, name=modelTraining" })
  modelTraining?: BigQueryModelTraining;

  @Metadata({ data: "json, name=modelTrainingCurrentIteration" })
  modelTrainingCurrentIteration?: number;

  @Metadata({ data: "json, name=modelTrainingExpectedTotalIteration" })
  modelTrainingExpectedTotalIteration?: string;

  @Metadata({ data: "json, name=numDmlAffectedRows" })
  numDmlAffectedRows?: string;

  @Metadata({ data: "json, name=queryPlan", elemType: shared.ExplainQueryStage })
  queryPlan?: ExplainQueryStage[];

  @Metadata({ data: "json, name=referencedRoutines", elemType: shared.RoutineReference })
  referencedRoutines?: RoutineReference[];

  @Metadata({ data: "json, name=referencedTables", elemType: shared.TableReference })
  referencedTables?: TableReference[];

  @Metadata({ data: "json, name=reservationUsage", elemType: shared.JobStatistics2ReservationUsage })
  reservationUsage?: JobStatistics2ReservationUsage[];

  @Metadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @Metadata({ data: "json, name=searchStatistics" })
  searchStatistics?: SearchStatistics;

  @Metadata({ data: "json, name=sparkStatistics" })
  sparkStatistics?: SparkStatistics;

  @Metadata({ data: "json, name=statementType" })
  statementType?: string;

  @Metadata({ data: "json, name=timeline", elemType: shared.QueryTimelineSample })
  timeline?: QueryTimelineSample[];

  @Metadata({ data: "json, name=totalBytesBilled" })
  totalBytesBilled?: string;

  @Metadata({ data: "json, name=totalBytesProcessed" })
  totalBytesProcessed?: string;

  @Metadata({ data: "json, name=totalBytesProcessedAccuracy" })
  totalBytesProcessedAccuracy?: string;

  @Metadata({ data: "json, name=totalPartitionsProcessed" })
  totalPartitionsProcessed?: string;

  @Metadata({ data: "json, name=totalSlotMs" })
  totalSlotMs?: string;

  @Metadata({ data: "json, name=transferredBytes" })
  transferredBytes?: string;

  @Metadata({ data: "json, name=undeclaredQueryParameters", elemType: shared.QueryParameter })
  undeclaredQueryParameters?: QueryParameter[];
}
