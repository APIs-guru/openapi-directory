from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CandidateStepTypeEnum(str, Enum):
    AWS_SAGE_MAKER_TRAINING_JOB = "AWS::SageMaker::TrainingJob"
    AWS_SAGE_MAKER_TRANSFORM_JOB = "AWS::SageMaker::TransformJob"
    AWS_SAGE_MAKER_PROCESSING_JOB = "AWS::SageMaker::ProcessingJob"

