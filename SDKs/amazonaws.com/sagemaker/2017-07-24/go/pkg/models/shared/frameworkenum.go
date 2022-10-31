package shared

type FrameworkEnum string

const (
	FrameworkEnumTensorflow FrameworkEnum = "TENSORFLOW"
	FrameworkEnumKeras      FrameworkEnum = "KERAS"
	FrameworkEnumMxnet      FrameworkEnum = "MXNET"
	FrameworkEnumOnnx       FrameworkEnum = "ONNX"
	FrameworkEnumPytorch    FrameworkEnum = "PYTORCH"
	FrameworkEnumXgboost    FrameworkEnum = "XGBOOST"
	FrameworkEnumTflite     FrameworkEnum = "TFLITE"
	FrameworkEnumDarknet    FrameworkEnum = "DARKNET"
	FrameworkEnumSklearn    FrameworkEnum = "SKLEARN"
)
