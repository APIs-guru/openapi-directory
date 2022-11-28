from dataclasses import dataclass, field
from enum import Enum

class AwsManagedHumanLoopRequestSourceEnum(str, Enum):
    AWS_REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3 = "AWS/Rekognition/DetectModerationLabels/Image/V3"
    AWS_TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1 = "AWS/Textract/AnalyzeDocument/Forms/V1"

