from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bienginestatistics
from . import tablereference
from . import datasetreference
from . import routinereference
from . import rowaccesspolicyreference
from . import tablereference
from . import dmlstatistics
from . import mlstatistics
from . import bigquerymodeltraining
from . import explainquerystage
from . import routinereference
from . import tablereference
from . import tableschema
from . import searchstatistics
from . import sparkstatistics
from . import querytimelinesample
from . import queryparameter


@dataclass_json
@dataclass
class JobStatistics2ReservationUsage:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotMs' }})
    

@dataclass_json
@dataclass
class JobStatistics2:
    bi_engine_statistics: Optional[bienginestatistics.BiEngineStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'biEngineStatistics' }})
    billing_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingTier' }})
    cache_hit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheHit' }})
    ddl_affected_row_access_policy_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddlAffectedRowAccessPolicyCount' }})
    ddl_destination_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddlDestinationTable' }})
    ddl_operation_performed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddlOperationPerformed' }})
    ddl_target_dataset: Optional[datasetreference.DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddlTargetDataset' }})
    ddl_target_routine: Optional[routinereference.RoutineReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddlTargetRoutine' }})
    ddl_target_row_access_policy: Optional[rowaccesspolicyreference.RowAccessPolicyReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddlTargetRowAccessPolicy' }})
    ddl_target_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddlTargetTable' }})
    dml_stats: Optional[dmlstatistics.DmlStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dmlStats' }})
    estimated_bytes_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedBytesProcessed' }})
    ml_statistics: Optional[mlstatistics.MlStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mlStatistics' }})
    model_training: Optional[bigquerymodeltraining.BigQueryModelTraining] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelTraining' }})
    model_training_current_iteration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelTrainingCurrentIteration' }})
    model_training_expected_total_iteration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelTrainingExpectedTotalIteration' }})
    num_dml_affected_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numDmlAffectedRows' }})
    query_plan: Optional[List[explainquerystage.ExplainQueryStage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryPlan' }})
    referenced_routines: Optional[List[routinereference.RoutineReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referencedRoutines' }})
    referenced_tables: Optional[List[tablereference.TableReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referencedTables' }})
    reservation_usage: Optional[List[JobStatistics2ReservationUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationUsage' }})
    schema: Optional[tableschema.TableSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    search_statistics: Optional[searchstatistics.SearchStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchStatistics' }})
    spark_statistics: Optional[sparkstatistics.SparkStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkStatistics' }})
    statement_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statementType' }})
    timeline: Optional[List[querytimelinesample.QueryTimelineSample]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeline' }})
    total_bytes_billed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBytesBilled' }})
    total_bytes_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBytesProcessed' }})
    total_bytes_processed_accuracy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBytesProcessedAccuracy' }})
    total_partitions_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPartitionsProcessed' }})
    total_slot_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSlotMs' }})
    transferred_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferredBytes' }})
    undeclared_query_parameters: Optional[List[queryparameter.QueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'undeclaredQueryParameters' }})
    
